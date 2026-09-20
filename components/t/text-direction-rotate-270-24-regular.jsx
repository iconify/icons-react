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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.tx5d8xbhy {
  d: path("M14.72 6.28a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06L18 5.56v14.69a.75.75 0 0 1-1.5 0V5.56l-.72.72a.75.75 0 0 1-1.06 0z");
  fill: currentColor;
}

.ylewi_k6l {
  d: path("M5.22 5.22a.75.75 0 0 0 1.06 1.06L7 5.56v3.69a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2z");
  fill: currentColor;
}

.zhrbgmbrx {
  d: path("M12.97 20.947l-9.496-3.753c-.595-.236-.63-1.043-.104-1.345l.105-.05l9.5-3.747a.75.75 0 0 1 .643 1.352l-.092.043l-2.526.997v4.113l2.52.995a.75.75 0 0 1 .454.876l-.031.097a.75.75 0 0 1-.876.453l-.098-.03zm-7.178-4.45L9.5 17.964v-2.928l-3.708 1.46z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="ylewi_k6l"/><path class="zhrbgmbrx"/><path class="tx5d8xbhy"/></g>`,
		"fallback": "fluent:text-direction-rotate-270-24-regular",
	});
}

export default Component;
