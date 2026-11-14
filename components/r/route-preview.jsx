import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ostiw4t1u {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.83 7.75H8q-2.25 0-2.25 2.25v5.299q2.5.351 2.5 3.201q0 3.25-3.25 3.25T1.75 18.5q0-2.85 2.5-3.201V10q0-3.75 3.75-3.75h6.83q.196-.874.871-1.549q.952-.953 2.299-.953t2.299.953t.951 2.298q.001 1.347-.951 2.3T18 10.252t-2.299-.953q-.675-.675-.871-1.549m-1.416 10.281Q15.64 15.25 18 15.25t4.586 2.781q.039.05.07.105q.031.056.052.116t.031.122t.011.126q0 .063-.011.126q-.01.062-.031.122t-.052.116q-.031.055-.07.105Q20.36 21.75 18 21.75t-4.586-2.781q-.039-.05-.07-.105q-.031-.056-.052-.116t-.031-.122t-.011-.126q0-.063.011-.126q.01-.062.031-.122t.052-.116q.031-.055.07-.105M18 20.25q1.456 0 3.019-1.75q-1.563-1.75-3.019-1.75t-3.019 1.75q1.563 1.75 3.019 1.75M18 18q-.318 0-.671.164q-.079.159-.079.336t.079.336Q17.682 19 18 19q.324 0 .684-.171q.076-.155.076-.329t-.076-.329Q18.324 18 18 18");
}
</style><path class="ostiw4t1u"/>`,
		"fallback": "uix-solid:route-preview",
	});
}

export default Component;
