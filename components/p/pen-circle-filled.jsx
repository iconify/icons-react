import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bd9gczbnq {
  cx: 13px;
  cy: 13px;
  r: 13px;
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.ivjvz2eii {
  fill: var(--svg-color--000, #000);
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.sj_o1dc7b {
  fill-rule: evenodd;
  d: path("M16.198 4.22L6.12 14.298a1 1 0 0 0-.282.555l-.705 4.594a1 1 0 0 0 1.14 1.14l4.595-.705a1 1 0 0 0 .555-.281L21.501 9.523a1 1 0 0 0 0-1.414l-3.89-3.89a1 1 0 0 0-1.413 0M7.317 18.404l.448-2.924l9.14-9.14l2.475 2.476l-9.14 9.14z");
}

.x5-7zxx6b {
  d: path("m14.442 8.247l1.06-1.061l3.242 3.24l-1.061 1.061z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGQjwe1bMh"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="sj_o1dc7b"/><path class="x5-7zxx6b"/></g></mask></defs><circle mask="url(#SVGQjwe1bMh)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:pen-circle-filled",
	});
}

export default Component;
