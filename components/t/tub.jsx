import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/n/n9woaabkf.css';
import '../../css/t/ta6jzk92i.css';
import '../../css/k/k9kqlacbd.css';
import '../../css/l/lmkpgsbao.css';
import '../../css/f/fooyp95-k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="n9woaabkf"/><path class="ta6jzk92i"/><path class="k9kqlacbd"/><path class="lmkpgsbao"/><path class="fooyp95-k"/></g>`,
		"fallback": "icon-park:tub",
	});
}

export default Component;
