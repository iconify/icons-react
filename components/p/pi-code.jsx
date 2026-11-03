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
		"content": `<style>.c5slibcbg {
  fill: var(--svg-color--f09082, #f09082);
  d: path("M0 0h191.999v127.997h-64.002V64.001H0z");
}

.utdkbpb0v {
  fill: var(--svg-color--4d9abf, #4d9abf);
  d: path("M0 64.001h64.001v63.996h63.996v64.002H64.001V256H0z");
}

.vrm1rlbtx {
  fill: var(--svg-color--f1be58, #f1be58);
  d: path("M191.999 127.997H256V256h-64.001z");
}
</style><path class="c5slibcbg"/><path class="utdkbpb0v"/><path class="vrm1rlbtx"/>`,
		"fallback": "logos:pi-code",
	});
}

export default Component;
