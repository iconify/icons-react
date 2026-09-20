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
		"content": `<style>.fydkagbkm {
  fill: var(--svg-color--c4342b, #c4342b);
  fill-rule: evenodd;
  d: path("M4.42 3.186a.57.57 0 0 1 .552-.17L16.876 5.93a.5.5 0 0 1 .197.092l2.422 1.767a.565.565 0 0 1 .133.773l-8.332 12.191a.563.563 0 0 1-.998-.13L4.306 3.753a.57.57 0 0 1 .114-.566M6.383 6.23l4.16 11.712l.684-6.069zm5.958 5.838l-.695 6.175l5.884-8.61zm5.72-3.93l-3.793 1.78l2.542-2.691zm-2.396-1.343L6.41 4.531l5.426 6.318z");
}
</style><path clip-rule="evenodd" class="fydkagbkm"/>`,
		"fallback": "token-branded:tron",
	});
}

export default Component;
