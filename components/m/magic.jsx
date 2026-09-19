import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/banyp_byo.css';
import '../../css/k/kk04ncb8k.css';
import '../../css/d/dssrzebmt.css';
import '../../css/p/pt94-ibub.css';
import '../../css/o/obvm_z7qw.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="banyp_byo"/><path clip-rule="evenodd" class="kk04ncb8k"/><path clip-rule="evenodd" class="dssrzebmt"/><path class="pt94-ibub"/><path class="obvm_z7qw"/>`,
		"fallback": "flat-ui:magic",
	});
}

export default Component;
