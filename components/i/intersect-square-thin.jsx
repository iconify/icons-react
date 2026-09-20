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
		"content": `<style>.osttp0b4i {
  fill: currentColor;
  d: path("M216 92h-52V40a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h52v52a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4M44 156V44h112v48H96a4 4 0 0 0-4 4v60Zm56-50.34L150.34 156H100Zm56 44.68L105.66 100H156ZM212 212H100v-48h60a4 4 0 0 0 4-4v-60h48Z");
}
</style><path class="osttp0b4i"/>`,
		"fallback": "ph:intersect-square-thin",
	});
}

export default Component;
