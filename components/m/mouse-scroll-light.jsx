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
		"content": `<style>.fidpcdc7o {
  fill: currentColor;
  d: path("M144 18h-32a62.07 62.07 0 0 0-62 62v96a62.07 62.07 0 0 0 62 62h32a62.07 62.07 0 0 0 62-62V80a62.07 62.07 0 0 0-62-62m50 158a50.06 50.06 0 0 1-50 50h-32a50.06 50.06 0 0 1-50-50V80a50.06 50.06 0 0 1 50-50h32a50.06 50.06 0 0 1 50 50Zm-60-97.51v99l13.76-13.75a6 6 0 0 1 8.48 8.48l-24 24a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L122 177.51v-99l-13.76 13.73a6 6 0 0 1-8.48-8.48l24-24a6 6 0 0 1 8.48 0l24 24a6 6 0 1 1-8.48 8.48Z");
}
</style><path class="fidpcdc7o"/>`,
		"fallback": "ph:mouse-scroll-light",
	});
}

export default Component;
