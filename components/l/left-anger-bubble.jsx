import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ckn970boe {
  fill: var(--svg-color--c22c4b, #c22c4b);
  d: path("M8.473 22.539L5.13 13.668l12.516 1.842l5.503-8.01l5.68 5.421l11.258-7.01l1.864 8.24l9.788-2.371l.153 7.175l9.626-1.853l-5.576 6.809l7.907 5.809l-7.948 5.422l3.43 8.564l-12.681-.115s5.542 9.695 7.803 13.556l-19.524-10.72l-8.658 6.313l-2.441-6.773l-6.33 3.038l-.824-5.083l-9.775 5.41l3.779-9.08l-7.488.39l3.874-6.803l-6.99-8.874");
}
</style><path class="ckn970boe"/>`,
		"fallback": "emojione-v1:left-anger-bubble",
	});
}

export default Component;
