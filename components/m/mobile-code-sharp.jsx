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
		"content": `<style>.t17i9jbdk {
  fill: currentColor;
  d: path("M6 22V2h12.077v4.83H19v3.686h-.923v2.619h-8V22zm9.35-.611L12.462 18.5l2.888-2.888l.688.713l-2.175 2.175l2.175 2.175zm3.762 0l-.689-.714l2.175-2.175l-2.175-2.175l.689-.713L22 18.5zM12.587 6.086q.22-.222.22-.549t-.222-.547t-.549-.22t-.548.22t-.22.55t.222.547t.549.22t.548-.22");
}
</style><path class="t17i9jbdk"/>`,
		"fallback": "material-symbols-light:mobile-code-sharp",
	});
}

export default Component;
