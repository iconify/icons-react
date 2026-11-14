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
		"content": `<style>.geqe-pbnc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 8.5V18q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h1.826q-.076.337-.076.75q0 2.25 2.25 2.25t2.25-2.25q0-.413-.076-.75h5.652q-.076.337-.076.75q0 2.25 2.25 2.25t2.25-2.25q0-.413-.076-.75H21q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146V8.5q0-2.75-2.75-2.75H5q-1.139 0-1.945.805q-.805.806-.805 1.945m8.25.25h3q2.25 0 2.25 2.25v1q0 2.25-2.25 2.25h-3q-2.25 0-2.25-2.25v-1q0-2.25 2.25-2.25");
}
</style><path class="geqe-pbnc"/>`,
		"fallback": "uix-solid:mobile-home",
	});
}

export default Component;
