import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usuimpbio.css';
import '../../css/i/i5007011u.css';
import '../../css/m/mh0n59bar.css';
import '../../css/g/gyydhabtl.css';
import '../../css/t/tkbog5bpr.css';
import '../../css/j/j--d0i75f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usuimpbio"/><path class="i5007011u"/><path class="mh0n59bar"/><path class="gyydhabtl"/><path class="tkbog5bpr"/><path class="j--d0i75f"/>`,
		"fallback": "selfhst:linux-containers-lxc",
	});
}

export default Component;
