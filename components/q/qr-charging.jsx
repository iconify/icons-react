import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uk6nrckuy.css';
import '../../css/q/qljskglob.css';
import '../../css/b/bqcg8gbob.css';
import '../../css/z/zwsam6e5w.css';
import '../../css/l/l9ehr-4nc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="uk6nrckuy"/><rect class="qljskglob"/><rect class="bqcg8gbob"/><path class="zwsam6e5w"/><path class="l9ehr-4nc"/></g>`,
		"fallback": "evicons:qr-charging",
	});
}

export default Component;
