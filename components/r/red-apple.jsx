import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mht3ysrei.css';
import '../../css/c/cegsd8bys.css';
import '../../css/o/ot5v1u4wr.css';
import '../../css/q/qogm_m6by.css';
import '../../css/x/x-8efsb0a.css';
import '../../css/q/qdhkx0bdo.css';
import '../../css/c/crwecx_-n.css';
import '../../css/m/m1rsh9elf.css';
import '../../css/c/ck0lzy_jb.css';
import '../../css/o/ojawzx60q.css';
import '../../css/v/v0isk0bru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mht3ysrei"/><path class="cegsd8bys"/><path class="ot5v1u4wr"/><path class="qogm_m6by"/><path class="x-8efsb0a"/><path class="qdhkx0bdo"/><path class="crwecx_-n"/><path class="m1rsh9elf"/><path class="ck0lzy_jb"/><path class="ojawzx60q"/><path class="v0isk0bru"/>`,
		"fallback": "streamline-emojis:red-apple",
	});
}

export default Component;
