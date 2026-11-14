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
		"content": `<style>.xb79c--6x {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m9.84 4.144l-3.5 6.5q-.09.167-.09.356v1q0-2.25-2.25-2.25T1.75 12v6.5q0 2.25 2.25 2.25t2.25-2.25V20q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h10.244q2.432.019 2.747-2.381l1.246-6.477l.007-.048q.156-1.238-.673-2.171T18.5 8.75h-4.393l.388-2.917q.25-2.244-1.683-2.832q-1.841-.56-2.936 1.083q-.02.029-.036.06");
}
</style><path class="xb79c--6x"/>`,
		"fallback": "uix-solid:thumbs-up",
	});
}

export default Component;
