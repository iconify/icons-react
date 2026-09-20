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
		"content": `<style>.egokoxs_q {
  fill: currentColor;
  d: path("M96 156h120a20 20 0 0 0 20-20V76a20 20 0 0 0-20-20h-24V40a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v16H96a20 20 0 0 0-20 20v60a20 20 0 0 0 20 20m48-112h24v12h-24Zm-44 36h112v52H100Zm-8 144a20 20 0 1 1-20-20a20 20 0 0 1 20 20m144 0a20 20 0 1 1-20-20a20 20 0 0 1 20 20m16-44a12 12 0 0 1-12 12H32a12 12 0 0 1 0-24h4V77L15.51 56.49a12 12 0 0 1 17-17l21.63 21.68A19.86 19.86 0 0 1 60 75.31V168h180a12 12 0 0 1 12 12");
}
</style><path class="egokoxs_q"/>`,
		"fallback": "ph:trolley-suitcase-bold",
	});
}

export default Component;
