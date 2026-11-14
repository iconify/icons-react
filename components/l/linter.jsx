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
		"content": `<style>.kdhhgccdb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 10q0-3.21 2.27-5.48T10 2.25t5.48 2.27T17.75 10q0 2.829-1.762 4.927l5.042 5.043q.053.052.094.113t.069.13t.043.141t.014.146q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094l-5.043-5.042Q12.829 17.75 10 17.75q-3.21 0-5.48-2.27T2.25 10");
}
</style><path class="kdhhgccdb"/>`,
		"fallback": "uix-solid:linter",
	});
}

export default Component;
