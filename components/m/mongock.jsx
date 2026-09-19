import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyt9-sb9b.css';
import '../../css/p/penv9lb5j.css';
import '../../css/m/m1hgx9ntx.css';
import '../../css/u/upa9vcbvf.css';
import '../../css/x/xmk0yknes.css';
import '../../css/s/skk1shfyp.css';
import '../../css/c/c5s_mibno.css';
import '../../css/b/b6aszybqn.css';
import '../../css/p/pf3n8qo0h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyt9-sb9b"/><path class="penv9lb5j"/><path class="m1hgx9ntx"/><path class="upa9vcbvf"/><path class="xmk0yknes"/><path class="skk1shfyp"/><path class="c5s_mibno"/><path class="b6aszybqn"/><path class="pf3n8qo0h"/>`,
		"fallback": "devicon:mongock",
	});
}

export default Component;
