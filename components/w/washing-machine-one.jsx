import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1bsdki_t.css';
import '../../css/c/ccdo41bsm.css';
import '../../css/d/dgqbictcz.css';
import '../../css/x/xdy-mybuj.css';
import '../../css/l/lfamxyipl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyZhNXeJU"><g class="ft5dv1b6b"><rect class="b1bsdki_t"/><path class="ccdo41bsm"/><circle class="dgqbictcz"/><circle class="xdy-mybuj"/><circle class="lfamxyipl"/></g></mask></defs><path mask="url(#SVGyZhNXeJU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:washing-machine-one",
	});
}

export default Component;
