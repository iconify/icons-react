import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7ephwb-o.css';
import '../../css/g/gk5dn-bts.css';
import '../../css/r/r6ariacwh.css';
import '../../css/z/z00sw9avu.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7ephwb-o"/><path class="gk5dn-bts"/><path class="r6ariacwh"/><path class="z00sw9avu"/>`,
		"fallback": "tabler-flags:kuwait",
	});
}

export default Component;
