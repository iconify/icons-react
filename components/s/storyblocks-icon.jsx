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
		"content": `<style>.ee40l2yib {
  d: path("M122.4 60.8v86.4c-24 0-43.2-19.2-43.2-43.2s19.2-43.2 43.2-43.2m11.2 134.4v-86.4c24 0 43.2 19.2 43.2 43.2c0 23.613-18.586 42.58-42.043 43.185zM154 60.8c11.2 0 20.4 9.2 20.4 20.4s-9.2 20.4-20.4 20.4s-20.4-9.2-20.4-20.4s9.2-20.4 20.4-20.4m-52 93.6c11.2 0 20.4 9.2 20.4 20.4s-9.2 20.4-20.4 20.4s-20.4-9.2-20.4-20.4s9.2-20.4 20.4-20.4");
}

.eigjrvbls {
  cx: 128px;
  cy: 128px;
  r: 128px;
  fill: var(--svg-color--ffe121, #ffe121);
}
</style><circle class="eigjrvbls"/><path class="ee40l2yib"/>`,
		"fallback": "logos:storyblocks-icon",
	});
}

export default Component;
