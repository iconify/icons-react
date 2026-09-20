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
		"content": `<style>.t6txusbnf {
  fill: currentColor;
  d: path("M9.5 16.5h3.385q.69 0 1.152-.462t.463-1.153v-1.77q0-.69-.462-1.152t-1.153-.463H10.5v-3h4v-1h-5v5h3.385q.269 0 .442.173t.173.443v1.769q0 .269-.173.442t-.442.173H9.5zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="t6txusbnf"/>`,
		"fallback": "material-symbols-light:looks-5",
	});
}

export default Component;
