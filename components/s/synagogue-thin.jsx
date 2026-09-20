import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n28odbbjt {
  fill: currentColor;
  d: path("M204 60.4V32a4 4 0 0 0-8 0v28.4A20 20 0 0 0 180 80v49.11l-48-27.43V72a4 4 0 0 0-8 0v29.68l-48 27.43V80a20 20 0 0 0-16-19.6V32a4 4 0 0 0-8 0v28.4A20 20 0 0 0 36 80v136a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4v-40a12 12 0 0 1 24 0v40a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4V80a20 20 0 0 0-16-19.6m-4 7.6a12 12 0 0 1 12 12v28h-24V80a12 12 0 0 1 12-12M56 68a12 12 0 0 1 12 12v28H44V80a12 12 0 0 1 12-12m-12 48h24v96H44Zm84 40a20 20 0 0 0-20 20v36H76v-73.68l52-29.71l52 29.71V212h-32v-36a20 20 0 0 0-20-20m60 56v-96h24v96Z");
}
</style><path class="n28odbbjt"/>`,
		"fallback": "ph:synagogue-thin",
	});
}

export default Component;
