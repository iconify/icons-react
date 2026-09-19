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
		"content": `<style>.qqp5zwbha {
  fill: currentColor;
  d: path("m12 10l-.94 2.06L9 13l2.06.94L12 16l.94-2.06L15 13l-2.06-.94zm8-5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 14H4V7h4.05l.59-.65L9.88 5h4.24l1.24 1.35l.59.65H20zM12 8c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3s-1.35 3-3 3");
}
</style><path class="qqp5zwbha"/>`,
		"fallback": "ic:outline-camera-enhance",
	});
}

export default Component;
