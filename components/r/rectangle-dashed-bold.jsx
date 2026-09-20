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
		"content": `<style>.j1no63oim {
  fill: currentColor;
  d: path("M84 48a12 12 0 0 1-12 12H44v12a12 12 0 0 1-24 0V56a20 20 0 0 1 20-20h32a12 12 0 0 1 12 12M32 156a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12m40 40H44v-12a12 12 0 0 0-24 0v16a20 20 0 0 0 20 20h32a12 12 0 0 0 0-24m72 0h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m80-24a12 12 0 0 0-12 12v12h-28a12 12 0 0 0 0 24h32a20 20 0 0 0 20-20v-16a12 12 0 0 0-12-12m0-72a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m-8-64h-32a12 12 0 0 0 0 24h28v12a12 12 0 0 0 24 0V56a20 20 0 0 0-20-20m-72 0h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24");
}
</style><path class="j1no63oim"/>`,
		"fallback": "ph:rectangle-dashed-bold",
	});
}

export default Component;
