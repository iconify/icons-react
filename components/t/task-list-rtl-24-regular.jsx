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
		"content": `<style>.ql5r5ne9y {
  fill: currentColor;
  d: path("M21.78 4.78a.75.75 0 0 0-1.06-1.06l-1.97 1.97l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm-7.53 13.227H2.75l-.102.007a.75.75 0 0 0 .102 1.493h11.5l.102-.007a.75.75 0 0 0-.102-1.493m0-6.507H2.75l-.102.007A.75.75 0 0 0 2.75 13h11.5l.102-.007a.75.75 0 0 0-.102-1.493m0-6.5H2.75l-.102.007A.75.75 0 0 0 2.75 6.5h11.5l.102-.007A.75.75 0 0 0 14.25 5m7.53 12.78a.75.75 0 1 0-1.06-1.06l-1.97 1.97l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm0-7.56a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.97-1.97a.75.75 0 0 1 1.06 0");
}
</style><path class="ql5r5ne9y"/>`,
		"fallback": "fluent:task-list-rtl-24-regular",
	});
}

export default Component;
