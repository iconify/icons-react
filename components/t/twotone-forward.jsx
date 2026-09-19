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
		"content": `<style>.gimyqk3vk {
  fill: currentColor;
  d: path("m20 12l-8-8v4H4v8h8v4zM6 14v-4h8V8.83L17.17 12L14 15.17V14z");
}

.nyvu5hb6h {
  fill: currentColor;
  d: path("M14 14v1.17L17.17 12L14 8.83V10H6v4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="nyvu5hb6h"/><path class="gimyqk3vk"/>`,
		"fallback": "ic:twotone-forward",
	});
}

export default Component;
