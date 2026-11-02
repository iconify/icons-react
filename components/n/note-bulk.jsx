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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.qap156b9u {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13.707 20.707A1 1 0 0 1 13 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7c0 .265-.105.52-.293.707ZM15 13a2 2 0 0 0-2 2v4l6-6Z");
}

.v44fbybip {
  d: path("M12 15a3 3 0 0 1 3-3h5a1.002 1.002 0 0 1 .707 1.707l-7 7A1 1 0 0 1 12 20Zm5.586-1H15a.997.997 0 0 0-1 1v2.586Z");
}
</style><g class="cuyn6tgcc"><path class="qap156b9u"/><path class="v44fbybip"/></g>`,
		"fallback": "coolicons:note-bulk",
	});
}

export default Component;
