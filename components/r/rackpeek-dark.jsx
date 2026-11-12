import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6msedb6h.css';
import '../../css/n/nnk71vbdc.css';
import '../../css/k/k-v2ul_kt.css';
import '../../css/i/it9nf6esa.css';
import '../../css/i/izx10zobu.css';
import '../../css/g/g_z4tpb-l.css';
import '../../css/x/xsz2__blu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6msedb6h"/><path class="nnk71vbdc"/><path class="k-v2ul_kt"/><path class="it9nf6esa"/><path class="izx10zobu"/><path class="g_z4tpb-l"/><path class="xsz2__blu"/>`,
		"fallback": "selfhst:rackpeek-dark",
	});
}

export default Component;
