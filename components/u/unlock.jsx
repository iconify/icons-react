import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/ol2q0bijy.css';
import '../../css/j/j2n4kybwy.css';
import '../../css/e/ejxs69auf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0otHQdzY"><g class="ufeehvblu"><rect class="ol2q0bijy"/><path class="j2n4kybwy"/><path class="ejxs69auf"/></g></mask></defs><path mask="url(#SVG0otHQdzY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:unlock",
	});
}

export default Component;
