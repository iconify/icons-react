import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni_8jsb-d.css';
import '../../css/t/tblwxac3r.css';
import '../../css/b/bkf_frbkg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ni_8jsb-d"/><rect class="tblwxac3r"/><path class="bkf_frbkg"/>`,
		"fallback": "devicon:typer",
	});
}

export default Component;
