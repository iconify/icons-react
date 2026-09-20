import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cr-j2kthz {
  cx: 4px;
  cy: 31px;
  r: 3px;
  fill: var(--svg-color--bdddf4, #bdddf4);
}

.k_beisbaf {
  fill: var(--svg-color--bdddf4, #bdddf4);
  d: path("M35 12a7 7 0 0 0-7-7c-1.167 0-2.265.29-3.232.794c-2.082-2.827-5.425-4.669-9.205-4.669c-5.132 0-9.475 3.38-10.923 8.036A6 6 0 0 0 0 15a5.996 5.996 0 0 0 5.021 5.913C5.237 24.862 8.498 28 12.5 28c2.176 0 4.13-.933 5.5-2.413A7.47 7.47 0 0 0 23.5 28c4.143 0 7.5-3.357 7.5-7.5a7.5 7.5 0 0 0-.289-2.045A7 7 0 0 0 35 12");
}
</style><path class="k_beisbaf"/><circle class="cr-j2kthz"/>`,
		"fallback": "twemoji:thought-balloon",
	});
}

export default Component;
