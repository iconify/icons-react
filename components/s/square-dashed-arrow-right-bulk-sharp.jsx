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
		"content": `<style>.blwu6d_fr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13.586 13H8a1 1 0 0 1 0-2h5.586l-1.293-1.293a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.fnjjd5b1f {
  d: path("M2 3a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H4v2a1 1 0 0 1-2 0Zm12-1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Zm7 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V4h-2a1 1 0 0 1 0-2ZM2 10a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0Zm20 4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0ZM3 22a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2Zm19-1a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0Zm-12 1a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Z");
}
</style><g class="cuyn6tgcc"><path class="blwu6d_fr"/><path class="fnjjd5b1f"/></g>`,
		"fallback": "coolicons:square-dashed-arrow-right-bulk-sharp",
	});
}

export default Component;
