import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/xs7dh3-er.css';
import '../../css/q/qpbk08zdt.css';
import '../../css/x/xtbnnobia.css';
import '../../css/q/qphacqbpf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSKBqUbpt"><g class="s9cl3zbei"><path class="xs7dh3-er"/><circle class="qpbk08zdt"/><path class="xtbnnobia"/><path class="qphacqbpf"/></g></mask></defs><path mask="url(#SVGSKBqUbpt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:timed-mail",
	});
}

export default Component;
