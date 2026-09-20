import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ij968mb3j {
  fill: var(--svg-color--195de6, #195de6);
  d: path("m208 288l-16-128h32l16-16V0h-48v48h-32V0H96v48H64V0H16v144l16 16h32L48 288H16L0 304v80h256v-80l-16-16z");
}
</style><path class="ij968mb3j"/>`,
		"fallback": "logos:turret",
	});
}

export default Component;
