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
		"content": `<style>.pvyzzg84v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 17.5q.111 0 .221-.011t.218-.032t.214-.054t.208-.074q.102-.043.2-.095q.097-.052.189-.113t.177-.132q.086-.07.164-.148t.148-.164q.07-.085.132-.177q.061-.092.113-.189q.052-.098.095-.2q.042-.102.074-.208t.054-.214q.021-.108.032-.218T7 15.25V3h12.5v9.368M15.232 17.5H4.75q-.111 0-.221-.011t-.218-.032t-.214-.054t-.208-.074q-.102-.043-.2-.095q-.097-.052-.189-.113t-.177-.132t-.164-.148q-.078-.078-.148-.164q-.07-.085-.132-.177q-.061-.092-.113-.189q-.052-.098-.095-.2q-.042-.102-.074-.208t-.054-.214t-.032-.218t-.011-.221V8.5H7m3-2h6.5m-6.5 4h6.5m1.5 4.25v3.5M18 21h.01");
}
</style><path class="pvyzzg84v"/>`,
		"fallback": "uix:news-alert",
	});
}

export default Component;
