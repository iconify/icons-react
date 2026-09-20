import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q_qnh9p1s {
  fill: currentColor;
  d: path("M4.126 20q-.234 0-.414-.111t-.28-.293q-.108-.179-.12-.387q-.01-.209.118-.421L11.3 5.212q.128-.212.308-.308T12 4.808t.391.096t.308.308l7.871 13.576q.128.212.115.417t-.118.391t-.282.295t-.41.109zm8.308-2.566q.182-.182.182-.434t-.182-.434t-.434-.181t-.434.181t-.182.434t.182.434t.434.181t.434-.181m-.077-2.193q.143-.144.143-.356v-4q0-.213-.144-.357t-.357-.143t-.356.143t-.143.357v4q0 .212.144.356t.357.144t.356-.144");
}
</style><path class="q_qnh9p1s"/>`,
		"fallback": "material-symbols-light:warning-rounded",
	});
}

export default Component;
