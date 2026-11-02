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
		"content": `<style>.aeoi-n55d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8m14 14H4a1 1 0 0 1-1-1c0-.829.336-1.577.865-2.203c.552-.651 1.272-1.14 2.031-1.52C7.741 16.355 9.953 16 12 16s4.259.355 6.104 1.277c.759.38 1.479.869 2.031 1.52c.529.626.865 1.374.865 2.203a1 1 0 0 1-1 1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.dko2tqbpg {
  d: path("M3 21c0-.829.336-1.577.865-2.203c.552-.651 1.272-1.14 2.031-1.52c3.416-1.707 8.792-1.707 12.208 0c.759.38 1.479.869 2.031 1.52c.529.626.865 1.374.865 2.203a1 1 0 0 1-2 0c0-.343-.176-.655-.392-.911c-.376-.444-.883-.765-1.398-1.023C15.653 18.288 13.725 18 12 18s-3.653.288-5.21 1.066c-.515.258-1.022.579-1.398 1.023c-.216.256-.392.568-.392.911a1 1 0 0 1-2 0");
}
</style><g class="cuyn6tgcc"><path class="aeoi-n55d"/><path class="dko2tqbpg"/></g>`,
		"fallback": "coolicons:user-alt-bulk",
	});
}

export default Component;
