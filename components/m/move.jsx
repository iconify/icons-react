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
		"content": `<style>.etsw3wbjg {
  fill: currentColor;
  d: path("M10.787 16.708q-.078-.081-.128-.192q-.311-.8-.725-1.385q-.413-.585-.817-1.12q-.519-.688-.914-1.388t-.395-1.739q0-1.315.938-2.253T11 7.692t2.254.939t.938 2.253q0 1.039-.395 1.739t-.914 1.388q-.404.535-.818 1.12q-.413.584-.725 1.384q-.05.131-.127.202T11 16.79t-.214-.081m.967-5.07q.305-.305.305-.754q0-.448-.305-.752q-.305-.305-.753-.305t-.753.305t-.305.752t.305.753t.753.305t.753-.305M11 20q-3.327 0-5.663-2.336T3 12q0-1.664.626-3.118T5.34 6.34t2.542-1.714T11 4t3.118.626T16.66 6.34t1.714 2.542T19 12v1.412l2.037-2.062l.713.689l-3.25 3.25l-3.25-3.25l.713-.689L18 13.387V12q0-2.9-2.05-4.95T11 5T6.05 7.05T4 12q.006 2.92 2.043 4.96T11 19q1.406 0 2.589-.499t2.17-1.386l.733.714q-1.129 1.027-2.539 1.599T11 20");
}
</style><path class="etsw3wbjg"/>`,
		"fallback": "material-symbols-light:move",
	});
}

export default Component;
