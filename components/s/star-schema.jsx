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
		"content": `<style>.pu47idbne {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.25 3.75q0-2.25-2.25-2.25T9.75 3.75q0 1.878 1.568 2.189q-.068.148-.068.311v2.5q-1.816 0-2.313 1.319l-1.99-.543q-.226-.061-.447.017V9.5q0-2.25-2.25-2.25T2 9.5t2.25 2.25q1.47 0 1.979-.96q.139.133.324.184l2.197.599v1.177q0 .861.507 1.513l-1.381 2.071q-.063.094-.095.202q-.248-.036-.531-.036Q5 16.5 5 18.75T7.25 21t2.25-2.25q0-.972-.42-1.524q.023-.029.044-.06l1.354-2.031q.362.115.772.115h1.5q.41 0 .772-.115l1.354 2.031q.021.031.044.06q-.42.552-.42 1.524q0 2.25 2.25 2.25T19 18.75t-2.25-2.25q-.283 0-.531.036q-.032-.108-.095-.202l-1.381-2.071q.507-.652.507-1.513v-1.177l2.197-.599q.185-.051.324-.184q.509.96 1.979.96Q22 11.75 22 9.5t-2.25-2.25T17.5 9.5v.043q-.221-.078-.447-.017l-2.079.567q-.173-.328-.456-.611q-.732-.732-1.768-.732v-2.5q0-.163-.068-.311q1.568-.311 1.568-2.189");
}
</style><path class="pu47idbne"/>`,
		"fallback": "uix-solid:star-schema",
	});
}

export default Component;
