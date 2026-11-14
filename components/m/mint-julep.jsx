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
		"content": `<style>.n9_dp8k0j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.356 7.333Q14.237 1.75 20 1.75q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 .034-.003.068q-.414 4.556-3.897 5.891q.783.395 1.566.917q.124.083.207.207t.112.27q.015.072.015.145V19q0 2.75-2.75 2.75H8q-2.75 0-2.75-2.75v-9q0-.093.023-.182q.022-.09.066-.172q.043-.082.106-.15q.062-.069.139-.12q3.886-2.591 7.772-2.043m.335 1.6q-2.274-.459-4.548.317h5.714q-.432-.147-.863-.25q-.159-.001-.303-.067");
}
</style><path class="n9_dp8k0j"/>`,
		"fallback": "uix-solid:mint-julep",
	});
}

export default Component;
