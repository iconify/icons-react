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
		"content": `<style>.ozlb7db2z {
  fill: currentColor;
  d: path("M20.75 17.5a1.25 1.25 0 1 0 0 2.499a1.25 1.25 0 0 0 0-2.499m-3.5.5H2.75a.75.75 0 0 0-.102 1.493l.102.007h14.5a.75.75 0 0 0 .102-1.493zm3.5-7a1.25 1.25 0 1 0 0 2.499a1.25 1.25 0 0 0 0-2.499m-3.5.5H2.75a.75.75 0 0 0-.102 1.493L2.75 13h14.5a.75.75 0 0 0 .102-1.493zm3.5-7a1.25 1.25 0 1 0 0 2.499a1.25 1.25 0 0 0 0-2.499m-3.5.5H2.75a.75.75 0 0 0-.102 1.493l.102.007h14.5a.75.75 0 0 0 .102-1.493z");
}
</style><path class="ozlb7db2z"/>`,
		"fallback": "fluent:text-bullet-list-rtl-24-regular",
	});
}

export default Component;
