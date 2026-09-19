import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/p/p26-65bus.css';
import '../../css/v/v55i1-bqv.css';
import '../../css/x/x3p095b-m.css';
import '../../css/v/vaedpf2ck.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfs3DUbhh"><g class="ufeehvblu"><path class="p26-65bus"/><path class="v55i1-bqv"/><path class="x3p095b-m"/><path class="vaedpf2ck"/></g></mask></defs><path mask="url(#SVGfs3DUbhh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:mountain",
	});
}

export default Component;
