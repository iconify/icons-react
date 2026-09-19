import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/j_wfchbkt.css';
import '../../css/k/kuaez8b4u.css';
import '../../css/l/lax_2acvz.css';
import '../../css/n/n1ef3ephg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGs8QpjdIV"><g class="wwvp95byt"><path class="j_wfchbkt"/><path class="kuaez8b4u"/><circle class="lax_2acvz"/><path class="n1ef3ephg"/></g></mask></defs><path mask="url(#SVGs8QpjdIV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:passport",
	});
}

export default Component;
