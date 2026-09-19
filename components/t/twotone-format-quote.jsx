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
		"content": `<style>.n36pfablx {
  fill: currentColor;
  d: path("M18.62 18L21 13.24V6h-8v8h2.38l-2 4zM15 12V8h4v4.76L17.38 16h-.76l2-4zM3.38 18h5.24L11 13.24V6H3v8h2.38zM5 12V8h4v4.76L7.38 16h-.76l2-4z");
}

.pbolj2bqa {
  fill: currentColor;
  d: path("M16.62 16h.76L19 12.76V8h-4v4h3.62zm-10 0h.76L9 12.76V8H5v4h3.62z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="pbolj2bqa"/><path class="n36pfablx"/>`,
		"fallback": "ic:twotone-format-quote",
	});
}

export default Component;
