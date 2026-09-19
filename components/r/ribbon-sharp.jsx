import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzm_txj8c.css';
import '../../css/g/gqct9gbdf.css';
import '../../css/i/ib9od1bqw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzm_txj8c"/><circle class="gqct9gbdf"/><path class="ib9od1bqw"/>`,
		"fallback": "famicons:ribbon-sharp",
	});
}

export default Component;
