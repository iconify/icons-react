import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/k/khai3abln.css';
import '../../css/k/klf3tcc5h.css';
import '../../css/d/d1c1fvdqn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeOhYVDdE"><g class="s9cl3zbei"><rect class="khai3abln"/><path class="klf3tcc5h"/><path class="d1c1fvdqn"/></g></mask></defs><path mask="url(#SVGeOhYVDdE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:laptop-computer",
	});
}

export default Component;
