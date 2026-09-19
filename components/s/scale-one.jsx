import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/c/cqe101bmy.css';
import '../../css/l/l2q_xtb5p.css';
import '../../css/u/u0bht2b7t.css';
import '../../css/t/tx-vvv1vs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGveqIBJ6t"><g class="ufeehvblu"><path class="cqe101bmy"/><path class="l2q_xtb5p"/><path class="u0bht2b7t"/><path class="tx-vvv1vs"/></g></mask></defs><path mask="url(#SVGveqIBJ6t)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:scale-one",
	});
}

export default Component;
