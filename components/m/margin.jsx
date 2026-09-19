import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/k/kb3uhrb5b.css';
import '../../css/q/q-u5w7bqk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGg6xLeIE"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="kb3uhrb5b"/><path class="q-u5w7bqk"/></g></mask></defs><path mask="url(#SVGGg6xLeIE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:margin",
	});
}

export default Component;
