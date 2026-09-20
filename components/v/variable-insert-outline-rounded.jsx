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
		"content": `<style>.xz4xddbpd {
  fill: currentColor;
  d: path("M4.808 16q-.343 0-.576-.23T4 15.2V8.8q0-.34.232-.57T4.808 8h14.384q.344 0 .576.232t.232.576v1.884q0 .213-.144.357t-.357.143t-.356-.143t-.143-.357V9H5v6h9.077q.213 0 .356.144t.144.357t-.144.356t-.356.143zM5 15V9zm12.962.29V18q0 .213-.144.356q-.144.144-.357.144t-.356-.144t-.143-.356v-3.619q0-.342.23-.573q.232-.231.574-.231h3.619q.212 0 .356.144t.144.357t-.144.356t-.356.143h-2.716l3.362 3.394q.146.141.146.335t-.146.34t-.347.146t-.348-.146z");
}
</style><path class="xz4xddbpd"/>`,
		"fallback": "material-symbols-light:variable-insert-outline-rounded",
	});
}

export default Component;
