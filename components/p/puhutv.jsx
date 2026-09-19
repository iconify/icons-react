import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.r6vm9ij5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.216 27.057c-1.729 0-3.13-1.369-3.13-3.057s1.401-3.056 3.13-3.056s3.13 1.368 3.13 3.056s-1.402 3.057-3.13 3.057m-20.433 0c-1.728 0-3.129-1.369-3.129-3.057s1.401-3.056 3.13-3.056s3.129 1.368 3.129 3.056s-1.4 3.057-3.13 3.057m24.877-7.399c-2.45-2.394-6.439-2.394-8.89 0l-5.327 5.203a.633.633 0 0 1-.887 0l-5.327-5.203c-2.451-2.394-6.439-2.394-8.89 0a6.046 6.046 0 0 0 0 8.684c2.451 2.393 6.44 2.394 8.89 0l1.772-1.73a.636.636 0 0 1 .887.002l2.668 2.604c.114.112.27.18.444.18s.33-.068.444-.18l2.668-2.605a.64.64 0 0 1 .444-.18a.63.63 0 0 1 .443.178l1.772 1.731c2.451 2.394 6.44 2.393 8.89 0a6.045 6.045 0 0 0 0-8.684");
}
</style><circle class="cpk0fnbgt"/><path class="r6vm9ij5m"/>`,
		"fallback": "arcticons:puhutv",
	});
}

export default Component;
