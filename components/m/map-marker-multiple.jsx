import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brep_k.css';
import '../../css/g/gbpw0b.css';
import '../../css/y/yuzzkf.css';
import '../../css/n/n53t9u.css';
import '../../css/q/qw8aly.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/s/s8e22g.css';
import '../../css/w/w9rtnm.css';
import '../../css/s/so-from-48.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGZUJ6bMb"><path class="brep_k gbpw0b yuzzkf"/><path class="brep_k n53t9u qw8aly"/></mask></defs><path mask="url(#SVGGZUJ6bMb)" class="lsejuv ydovum"/><path class="brep_k n53t9u s8e22g yuzzkf"/><circle class="w9rtnm ydovum"/>`,
		"fallback": "line-md:map-marker-multiple",
	});
}

export default Component;
